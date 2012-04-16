Package.describe({
  summary: "Ember MVC Javascript Framework"
});

Package.on_use(function (api) {
  api.add_files('ember.js', 'client');
  api.use(['jquery', 'handlebars']);
});

