---
title: Understanding Linux File Permissions
comments: true
---

To make your server more securely, you should give minimum rights to each user. In this blog, we try to tell how basic file permissions works on linux server and how octal permissions calculated.

---

### LINUX FILE PERMISSIONS

{% highlight bash linenos %}
utku@scw:~$ ls -al 
total 48
drwxr-xr-x 6 utku utku 4096 Apr 29 09:54 .
drwxr-xr-x 3 root root 4096 Apr 23 20:05 ..
-rw------- 1 utku utku  476 Apr 23 20:55 .bash_history
-rw-r--r-- 1 utku utku  220 Apr 23 20:05 .bash_logout
-rw-r--r-- 1 utku utku 3771 Apr 23 20:05 .bashrc
drwx------ 2 utku utku 4096 Apr 23 20:06 .cache
-rw------- 1 utku utku   43 Apr 23 20:21 .lesshst
drwxrwxr-x 2 utku utku 4096 Apr 29 09:54 linux
drwxrwxr-x 2 utku utku 4096 Apr 29 09:54 .nano
-rw-r--r-- 1 utku utku  655 Apr 23 20:05 .profile
drwx------ 2 utku utku 4096 Apr 23 20:54 .ssh
{% endhighlight %}

(-) rw-r--r-- (let's handle one of them)<br>
(d) rwxrwxr-x

first letter means directory or file. d:directory -:file

We can seperate this file permission string to four groups:
(-) (rw-) (r--) (r--)

-                   rw-     r--     r--
directory or file  owner   group  everyone  

permissions  owner group          
drwxr-xr-x 3 root  root 4096 Apr 23 20:05 ..
-rw-r--r-- 1 utku  utku  655 Apr 23 20:05 .profile


### Octal Permissions

-rw-r--r-- is equal to '644' in octal permissions

r = 4   w = 2   x = 1  - = 0

rw- = 6
r-- = 4
r-- = 4

-rwxrwxrwx  = 777
drwxr-xr-x  = 755
-rw-------  = 600

{% highlight bash linenos %}
ls -al ~
...
-rw------- 1 utku utku  476 Apr 23 20:55 .bash_history
...
{% endhighlight %}

This file's owner and group are named 'utku'. 

If we change group of file to 'root', utku user can still read file. Because owner has read access (rw-)

{% highlight bash linenos %}
sudo chgrp root .bash_history
cat .bash_history
{% endhighlight %}

But if we change owner of file to 'root', utku user cannot read that file. 
{% highlight bash linenos %}
sudo chown root .bash_history
cat .bash_history 
cat: .bash_history: Permission denied.
{% endhighlight %}

(dont forget to revert owner and group back)
{% highlight bash linenos %}
$ sudo chgrp utku .bash_history
$ sudo chown utku .bash_history
{% endhighlight %}


