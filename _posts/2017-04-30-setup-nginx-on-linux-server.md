---
title: Setup Nginx on Linux Server
comments: true
---

Nginx is a web server, which can also be used as a reverse proxy, load balancer and HTTP cache. This blog is about how to setup nginx on Ubuntu. 

---

### Basic setup for Nginx

Nginx is installed on default Linux repositories, so you can use apt-get to install it.

{% highlight bash %}
$ sudo apt-get install nginx
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  fontconfig-config fonts-dejavu-core geoip-database libfontconfig1 libfreetype6 libgd3 libgeoip1 libicu55 libjbig0 libjpeg-turbo8 libjpeg8 libtiff5 libvpx3 libxml2 libxpm4
  libxslt1.1 nginx-common nginx-core sgml-base xml-core
Suggested packages:
  libgd-tools geoip-bin fcgiwrap nginx-doc ssl-cert sgml-base-doc debhelper
The following NEW packages will be installed:
  fontconfig-config fonts-dejavu-core geoip-database libfontconfig1 libfreetype6 libgd3 libgeoip1 libicu55 libjbig0 libjpeg-turbo8 libjpeg8 libtiff5 libvpx3 libxml2 libxpm4
  libxslt1.1 nginx nginx-common nginx-core sgml-base xml-core
0 upgraded, 21 newly installed, 0 to remove and 10 not upgraded.
Need to get 13.5 MB of archives.
After this operation, 49.8 MB of additional disk space will be used.
-- type Y 

...
{% endhighlight %}

Nginx installation installs Nginx apps to ufw. 

{% highlight bash %}
$ sudo ufw app list
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
  mosh
{% endhighlight %}

You can allow Nginx apps, they contain their configurations.

{% highlight bash %}
$ sudo ufw allow 'Nginx HTTP'
Rule added
Rule added (v6)

$ sudo ufw allow 'Nginx HTTPS'
Rule added
Rule added (v6)
{% endhighlight %}

Check your Nginx service is running or not.

{% highlight bash %}
$ sudo systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2017-05-01 14:53:20 UTC; 2min 26s ago
 Main PID: 8886 (nginx)
   CGroup: /system.slice/nginx.service
           ├─8886 nginx: master process /usr/sbin/nginx -g daemon on; master_process on
           ├─8887 nginx: worker process                           
           └─8888 nginx: worker process                           

May 01 14:53:20 scw-712067 systemd[1]: Starting A high performance web server and a reverse proxy server...
May 01 14:53:20 scw-712067 systemd[1]: Started A high performance web server and a reverse proxy server.
{% endhighlight %}

It is running, type your ip on browser and see the Nginx default page.

### Managing the Nginx Process
We can manage the Nginx Web Server using the below command

To stop the Nginx web server use below command
{% highlight bash %}
$ sudo systemctl stop nginx
{% endhighlight %}

To Start the Nginx Web Server use the below command
{% highlight bash %}
$ sudo systemctl start nginx
{% endhighlight %}

To restart the Nginx Web Server use the below command
{% highlight bash %}
$ sudo systemctl restart nginx
{% endhighlight %}

To load the configuration changes without droping the existing connections, we can use the below command
{% highlight bash %}
$ sudo systemctl reload nginx
{% endhighlight %}

To start / stop the Nginx web server at the boot time we can use the below commands

To Start
{% highlight bash %}
$ sudo systemctl enable nginx
{% endhighlight %}

To Stop
{% highlight bash %}
$ sudo systemctl disable nginx
{% endhighlight %}


