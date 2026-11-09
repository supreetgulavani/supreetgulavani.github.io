source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins

# Local preview on Windows (ignored by the Linux build on GitHub Actions).
gem "tzinfo-data", platforms: [:mingw, :x64_mingw, :mswin]
# Use the openssl that ships with Ruby on Windows instead of compiling 4.x.
gem "openssl", "3.0.1", platforms: [:mingw, :x64_mingw, :mswin]
# Ruby 3+ no longer bundles webrick, which `jekyll serve` needs.
gem "webrick", "~> 1.8"
