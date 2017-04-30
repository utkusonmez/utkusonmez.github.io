---
title: Prepare ports on Linux Server
comments: true
---

In Linux, you have to give minimum access per operation and disable unneccessary access for users. This posts is about how ports are enabled or disabled due to security. 

---

### PORTS ON LINUX 

Default port numbers for common services on a server
1. http  : 80
2. https : 443
3. ssh   : 22
4. pop3  : 110
5. ftp   : 21
6. smtp  : 25


### ENABLE PORTS
(if ufw not installed, 'sudo apt-get install ufw')
{% highlight bash linenos %}
sudo ufw status
Status: inactive 
{% endhighlight %}


Deny incoming (You block everything comming in)
{% highlight bash linenos %}
sudo ufw default deny incoming
Default incoming policy changed to 'deny'
(be sure to update your rules accordingly)
{% endhighlight %}

Allow everything outgoing
{% highlight bash linenos %}
sudo ufw default allow outgoing
Default outgoing policy changed to 'allow'
(be sure to update your rules accordingly)
{% endhighlight %}

Check status again
{% highlight bash linenos %}
sudo ufw status
Status: inactive
(You block everything comming in)
{% endhighlight %}

If you activate ufw now, your server will be dead in water, inaccessible to us(including ssh)

Allow ssh
{% highlight bash linenos %}
sudo ufw allow ssh
Rules updated
Rules updated (v6)
{% endhighlight %}

Allow :80 port. This default http server port.
{% highlight bash linenos %}
sudo ufw allow www
Rules updated
Rules updated (v6)
{% endhighlight %}

Enable ufw
{% highlight bash linenos %}
sudo ufw enable 
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
(enable ufw for port managing) 
{% endhighlight %}

Check ufw status and permissions, maybe we did something wrong.
{% highlight bash linenos %}
sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere                  
80/tcp                     ALLOW       Anywhere                  
22 (v6)                    ALLOW       Anywhere (v6)             
80/tcp (v6)                ALLOW       Anywhere (v6)             
(check status and list your allowed ports)
{% endhighlight %}
