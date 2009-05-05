
desc "deploy"
task :deploy => [ :clean, :build ] do
  sh "rsync -var  --checksum  _site/ zegoggles.com:/var/www/zegoggles.com"
end

task :build do
  sh "jekyll"
end

task :clean do
  rm_f '_site'
end
