---
  title: ruby-ffi recipes
  published: true
---



The [Ruby FFI](http://kenai.com/projects/ruby-ffi) (Foreign Function Interface) provides a neat unified API for interfacing different flavours of Ruby (MRI, JRuby, Rubinius) with native C code. After reading Charles Nutter's recent blog post "[fork and exec on the JVM? JRuby to the Rescue!](http://blog.headius.com/2009/05/fork-and-exec-on-jvm-jruby-to-rescue.html)" I decided to have a play with it, mainly to launch console programs directly from a jirb session.

Unfortunately, FFI is not documented at all, except for one or two outdated blog posts (one of them is "[On the Rubinius FFI](http://lifegoo.pluskid.org/?p=370)", then there some examples on the [kenai wiki](http://kenai.com/projects/ruby-ffi/pages/Examples)).

So here a quick blog posts with some common ffi recipes. Say you wanted to use fork+exec, as demonstrated by Charles, but you want to use [execlp/execvp](http://www.opengroup.org/onlinepubs/009695399/functions/execlp.html), two functions which use the path to look up the executable (as hinted at by the trailing *p* in their names).

Here's the function definition for execlp:

<pre>
  <code class="c">
    int execlp(const char *file, const char *arg0, ... /*, (char *)0 */);
  </code class="c">
</pre>

A string (*file*), another string (*arg0*) followed by varargs (...), follwowed by NULL, returning int.
This translates into the following FFI glue code:

<pre>
  <code class="ruby">
  Module Exec
    extend FFI::Library
    attach_function :execlp, [:string, :string, :varargs], :int        
  end
  </code>
</pre>

Pretty straightforward, right? Now you can use the C function from Ruby:

<pre>
  <code class="ruby">
  Exec.execlp("vim", "vim", [:string, "/tmp/foo", :pointer, nil])
  </code>
</pre>

Notice how the varargs get passed as array with [:type, :value] pairs. This is necessary because ruby-ffi cannot automatically infer types from your calling code. Also notice that you need to null-terminate the array yourself. However, ruby-ffi does some magic for you behind the scenes (for example allocating temporary memory for C strings / pointers and copying the contents of your Ruby strings into it). Don't overestimate this though: FFI is (by design) a very low-level library.

My first advice: if you've got a choice between a varargs method and *char[], use the variadic function, it is easier to interface with.
Now to execvp, which does the same as execlp, but using an argument vector (v) instead of a list (l). The C function definition reads:

<pre>
  <code class="c">
    int execvp(const char *file, char *const argv[]);
  </code class="c">
</pre>      
  
  
Which translates to:

<pre>
  <code class="ruby">
  Module Exec
    extend FFI::Library
    attach_function :execvp, [:string, :pointer], :int
  end
  </code>
</pre>
  
One string, one pointer. The pointer is the tricky bit. You can *not* just pass an array of Ruby strings like so:

<pre>
  <code class="ruby">
    Exec.execvp("vim", ["vim", "/tmp/foo", nil]) 
  </code>
</pre>
    
No, you need to *manually* create a pointer pointing to an array of pointers (*yay!*):

<pre>
  <code class="ruby">
    strptrs = []
    strptrs << FFI::MemoryPointer.from_string("vim")
    strptrs << FFI::MemoryPointer.from_string("/tmp/foo")
    strptrs << nil

    # Now load all the pointers into a native memory block
    argv = FFI::MemoryPointer.new(:pointer, strptrs.length)
    strptrs.each_with_index do |p, i|
     argv[i].put_pointer(0,  p)
    end

    Exec.execvp("vim", argv)
  </code>
</pre>


<img src="http://tineye.com/query/94bd2df044eb69e36e9e76c950bae64f17ab29dd" alt="shoot-foot" class="left-img"/>
The fun of C ! Pointers to other pointers ! And it will even randomly crash if you make a mistake! 

The varargs version is a lot simpler, and has less scope to shoot yourself in the foot (well, you're now using C, so technically it's too late anyway). The good news: most people probably won't need to write FFI code, eventually the important C-based tools / libraries will have an FFI-layer provided by someone else. However, as FFI is quite new this is not the case for all of them yet.
