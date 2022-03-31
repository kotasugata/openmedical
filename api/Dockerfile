FROM ruby:3.0
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /Openmedical
WORKDIR /Openmedical
COPY Gemfile /Openmedical/Gemfile
COPY Gemfile.lock /Openmedical/Gemfile.lock
RUN bundle install
COPY . /Openmedical

# シェルスクリプトを実行します。
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]