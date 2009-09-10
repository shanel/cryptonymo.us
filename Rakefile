
task :default => :server

desc "deploy"
task :deploy => [ :clean, :build ] do
  sh "rsync -var  --checksum  _site/ shane@cryptonymo.us:/var/www/cryptonymo.us/doc/"
end

task :build do
  sh "jekyll"
end

desc "clean"
task :clean do
  rm_rf '_site'
end

task :server do
  sh "jekyll --auto --server"
end

task :push do
  system "git diff --quiet HEAD"
  raise "uncommited changes detected, commit first!" unless $?.success?

  sh "git push"
end
