(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["AddProfile.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.html", true, "AddProfile.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div>\n<h1>Add Profile</h1>\n<hr>\n<form  class=\"forms\" method=\"post\" encType=\"multipart/form-data\" action=\"/add_profile\">\n     \n\t <div class=\"form-group\">\n\t\t<label for=\"id_FirstName\"> First Name</label> <br>\n\t\t<input type=\"text\" name=\"first_name\" id=\"id_FirstName\" required/>\n\t </div>\n\n\t <div class=\"form-group\">\n\t\t<label for=\"id_lastname\">Last Name</label><br>\n\t\t<input type=\"Text\" name=\"last_name\" id=\"id_lastname\" required />\n\t </div>\n\n\t <div  class=\"form-group\">\n\t\t<label for=\"id_Gender\">Gender</label> <br>\n\t\t<input type=\"text\" name=\"gender\" id=\"id_Gender\" required/>\n\t </div>\n\n\t <div  class=\"form-group\">\n\t \t<label for=\"id_password\">Email</label> <br>\n\t\t<input type=\"email\" name=\"Email\" id=\"id_email\" required/>\n\t </div>\n\n\t <div  class=\"form-group\">\n\t \t<input type=\"file\" name=\"fileupload\" id=\"id_fileupload\" required />\n    </div>\n\t\n\n\t<button type=\"submit\" class=\"btn btn-success btn-block\">Add Profile</button>\n</div>\n</form>\n\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n\n    <title>Flask Starter App</title>\n\n    <!-- Bootstrap -->\n    <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <link rel=\"stylesheet\" href=\"css/app.css\">\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("css"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n  </head>\n  <body>\n    <header>\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("header.html", false, "base.html", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </header>\n    <main>\n        <div class=\"container\">\n        ";
output += "\n\n            ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n        </div>\n    </main>\n    <footer>\n        <div class=\"container\">\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("footer.html", false, "base.html", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </div>\n    </footer>\n\n    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\n    <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n    <!-- Include all compiled plugins (below), or include individual files as needed -->\n    <script src='js/bootstrap.min.js'></script>\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("js"))(env, context, frame, runtime, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
output += t_13;
output += "\n  </body>\n</html>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_css(env, context, frame, runtime, cb) {
var lineno = 16;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += " ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 34;
var colno = 15;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_js(env, context, frame, runtime, cb) {
var lineno = 47;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
output += " ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_css: b_css,
b_main: b_main,
b_js: b_js,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["footer.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<hr>\n<p>Copyright &copy; ExpressNunjucks Inc.</p>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["header.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Project 1</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/add_profile\"> Add Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/profiles\">Profiles</a>\n      </li>\n    </ul>\n  </div>\n</nav>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["home.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.html", true, "home.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n<h1>Flask Starter Code</h1>\n<p class=\"lead\">Use this starter template for your Flask apps as a way to quickly start any new project.<br>\nAll you get are these files and mostly barebones HTML/CSS files.</p>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["profiles.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.html", true, "profiles.html", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 1;
var colno = 2;
var output = "";
try {
var frame = frame.push(true);
output += "\n<div>\n";
if(runtime.contextOrFrameLookup(context, frame, "users")) {
output += "\n    ";
frame = frame.push();
var t_8 = runtime.contextOrFrameLookup(context, frame, "users");
if(t_8) {t_8 = runtime.fromIterator(t_8);
var t_7 = t_8.length;
for(var t_6=0; t_6 < t_8.length; t_6++) {
var t_9 = t_8[t_6];
frame.set("user", t_9);
frame.set("loop.index", t_6 + 1);
frame.set("loop.index0", t_6);
frame.set("loop.revindex", t_7 - t_6);
frame.set("loop.revindex0", t_7 - t_6 - 1);
frame.set("loop.first", t_6 === 0);
frame.set("loop.last", t_6 === t_7 - 1);
frame.set("loop.length", t_7);
output += "\n    <div class=\"profile\">\n       <div class=\"pic\"><img class=\"profilepic\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_9),"photo"), env.opts.autoescape);
output += "\"/></div>\n       <div class=\"info\"> \n        <h6>";
output += runtime.suppressValue(runtime.memberLookup((t_9),"first_name"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((t_9),"last_name"), env.opts.autoescape);
output += "</h6>\n        <h6>";
output += runtime.suppressValue(runtime.memberLookup((t_9),"gender"), env.opts.autoescape);
output += "</h6>\n        <h6>";
output += runtime.suppressValue(runtime.memberLookup((t_9),"Email"), env.opts.autoescape);
output += "</h6></div>\n        <form method=\"get\" action=\"/\">\n            <button class=\"btn btn-success vpbtn\">View Profile</button>\n        </form>\n       \n        \n    </div>\n    ";
;
}
}
frame = frame.pop();
output += "\n";
;
}
output += "\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();

