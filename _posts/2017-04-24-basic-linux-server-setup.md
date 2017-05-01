---
title: Basic Linux Server Security Setup (Ubuntu 16.04 trusty)
comments: true
---

When you first create a new Ubuntu 16.04 server, there are a few configuration steps that you should take early on as part of the basic setup. This will increase the security and usability of your server and will give you a solid foundation for subsequent actions.

--- 

### SSH TO SERVER AS ROOT USER
Connect to your server by using ssh or user/password

{% highlight bash %}
$ ssh root@X.Y.Z.Q
{% endhighlight %}

### UPDATE
Always try to install latest updates on your server, because 
{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get upgrade
{% endhighlight %}

### ADD USER NAMED user1
fill password and information about user
{% highlight bash %}
$ sudo adduser user1
{% endhighlight %}

### CHECK YOU ADDED YOUR USER SUCCESSFULLY
exit and login as user1
{% highlight bash %}
$ exit
$ ssh user1@X.Y.Z.Q 
{% endhighlight %}

### CHECK YOUR USER'S SUDO RIGHTS
There will be a privilege problem and file will not be shown.
{% highlight bash %}
$ sudo cat /etc/passwd
{% endhighlight %}

### GIVE SUDO RIGHTS
Give sudo rights to your user
{% highlight bash %}
$ ssh root@X.Y.Z.Q
$ sudo nano /etc/sudoers.d/user1
    user1 ALL=(ALL) NOPASSWD:ALL
$ exit 
$ ssh user1@X.Y.Z.Q
$ sudo cat /etc/passwd
{% endhighlight %}

### GENERATE SSH KEY TO BE MORE SECURE
Run this commands on your local machine for generating ssh key.

{% highlight bash %}
$ ssh-keygen -t rsa -b 4096 -C "user1@mail.com"
{% endhighlight %}
Enter a passphrase to save your keys from other people
This command will generate two files ->  public and private keys.

Copy public key on mac
{% highlight bash %}
$ pbcopy < ~/.ssh/id_rsa.pub
{% endhighlight %}

or copy public key on linux
{% highlight bash %}
$ cat ~/.ssh/id_rsa.pub 
{% endhighlight %}

Now connect to your server as user1

Paste your public key which you copied from local computer (pbcopy < ~/.ssh/id_rsa.pub)
{% highlight bash %}
$ ssh user1@X.Y.Z.Q
$ mkdir .ssh
$ touch .ssh/authorized_keys
$ vi .ssh/authorized_keys
{% endhighlight %}

You will be asked for passphrase if you already defined
Now only person can connect to you server who has your public/private key and passphrase
{% highlight bash %}
$ chmod 700 .ssh
$ chmod 644 .ssh/authorized_keys
$ exit
$ ssh user1@X.Y.Z.Q
{% endhighlight %}


### DISABLE PASSWORD LOGINS
You should also disable password logins to force ssh keys.

{% highlight bash %}
$ sudo vi /etc/ssh/sshd_config
  - change line to "PasswordAuthentication no"
$ sudo systemctl restart ssh (or sudo service ssh restart)
{% endhighlight %}

Now your server has a user named 'user1' and this user's keys are defined in your local machine. So you can connect your server by your local machine and no one else can do it.
