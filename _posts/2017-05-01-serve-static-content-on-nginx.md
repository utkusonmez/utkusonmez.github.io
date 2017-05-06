---
title: Serve static content on Nginx
comments: true
---

This blog is about serving static content on Nginx.

### Configure Nginx config file

Nginx config file located under '/etc/nginx' and you can check this link for full example of nginx configuration file. [Full example of nginx config file](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

{% highlight bash %}
$ sudo vi /etc/nginx/nginx.conf
{% endhighlight %}

and add this under http tag.

server { # simple reverse-proxy
  listen       80;
  server_name  www.utkusonmez.com utkusonmez.com ;

  # serve static files
  location /  {
    root    /var/www/utkusonmez.com/;
    expires 1m;
  }
}

Reload your nginx config.

{% highlight bash %}
$ sudo systemctl reload nginx
{% endhighlight %}

and check your site.
