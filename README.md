GreenTea
========

Green Tea is a lightweight web framework written in Node for quick development using a range of new hand crafted tools.

Here is a quick example of Green Tea in action:

```javascript

var tea = require('./GreenTea/greentea.js');

var app = function(request, response){
  tea.route('/markdown', 'GET', function(){
    tea.render_markdown('# Hello World!');
  });
  
  tea.route('/html', 'GET', function(){
    tea.render_html('<h1>Hello World!</h1>');
  });
}

tea.HTTPServer('localhost', 8080, app);

```

Now just run your code in node and navigate to http://localhost:8080 and there it is!
