---
title: Invalid number of arguments in root error
comments: true
---

If you get "invalid number of arguments in "root" directive in /etc/nginx/nginx.conf" error after you modify your nginx.conf file, you may forget a simple ';'.

{% highlight bash %}
$ sudo tail -100f /var/log/nginx/error.log 
2017/05/06 08:57:35 [emerg] 14757#14757: invalid number of arguments in "root" directive in /etc/nginx/nginx.conf:74
{% endhighlight %}