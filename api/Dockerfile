FROM ruby:2.6.6

WORKDIR /app
COPY config.ru .ruby-version Gemfile Gemfile.lock Rakefile ./

RUN gem install bundler -v 2.4.22 \
  && bundler install
