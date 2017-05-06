---
title: Nginx downloads page configuration
comments: true
---

This blog is about how to configure a downloads page for static files and how to force for download

### Configure Nginx config file

Nginx config file located under '/etc/nginx' and you can check this link for full example of nginx configuration file. [Full example of nginx config file](https://www.nginx.com/resources/wiki/start/topics/examples/full/)

{% highlight bash %}
$ sudo vi /etc/nginx/nginx.conf
{% endhighlight %}

and add this under http tag.

{% highlight json %}
server { # simple reverse-proxy
  listen       80;
  server_name  www.utkusonmez.com utkusonmez.com ;

  location ~ ^/downloads/(?<request_basename>(\w.)) {
    root /var/www/downloads/;
    add_header Content-Disposition 'attachment; filename="$request_basename"';
  }
}
{% endhighlight %}

make variable a path value (?<request_basename>(\w.)) 

<request_basename> is variable name
(\w.) matching regex for alphanumeric and dot

add_header : adds response header 

Content-Disposition 'attachment; filename="$request_basename"' : force downloads

Reload your nginx config.

{% highlight bash %}
$ sudo systemctl reload nginx
{% endhighlight %}

and check your file.
