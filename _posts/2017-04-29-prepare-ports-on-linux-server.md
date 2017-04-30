---
title: Prepare ports on Linux Server
comments: true
---



### PORTS ON LINUX 

Default port numbers for common services on a server
http  : 80
https : 443
ssh   : 22
pop3  : 110
ftp   : 21
smtp  : 25


### ENABLE PORTS
(if ufw not installed, 'sudo apt-get install ufw')
$ sudo ufw status
Status: inactive 
(You block everything comming in)

Deny incoming
$ sudo ufw default deny incoming
Default incoming policy changed to 'deny'
(be sure to update your rules accordingly)

Allow everything outgoing
$ sudo ufw default allow outgoing
Default outgoing policy changed to 'allow'
(be sure to update your rules accordingly)

Check status again
$ sudo ufw status
Status: inactive
(You block everything comming in)
If you activate it now, your server will be dead in water, inaccessible to us(including ssh)

$ sudo ufw allow ssh
Rules updated
Rules updated (v6)
(allow ssh)

$ sudo ufw allow www
Rules updated
Rules updated (v6)
(allow ports for simple web server)

$ sudo ufw enable 
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
(enable ufw for port managing) 

$ sudo ufw status
Status: active

To                         Action      From
--                         ------      ----
22                         ALLOW       Anywhere                  
80/tcp                     ALLOW       Anywhere                  
22 (v6)                    ALLOW       Anywhere (v6)             
80/tcp (v6)                ALLOW       Anywhere (v6)             
(check status and list your allowed ports)

