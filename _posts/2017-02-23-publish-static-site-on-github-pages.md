---
title: Publish static site on github pages
comments: true
---

You should add a new repo named '<<yourgithubusername>>.github.io'. Then push your static site to this repo. When a request arrives, github will be looking for a file named index.html. Your index.html file will be served to your guest.

### Deploy your site
{% highlight bash linenos %}

git clone https://github.com/<<username>>/<<username>>.github.io
cd username.github.io
echo "Welcome to my static site" > index.html
git add --all
git commit -m "Initial commit"
git push -u origin master

{% endhighlight %}

go to '<<yourgithubusername>>.github.io' and check your site.


### Also serve your custom domain
{% highlight bash linenos %}
echo "yourcustomdomain.com" > CNAME
git add .
git commit -m "CNAME added"
git push
{% endhighlight %}

go to site, which you bought your domain, add a CNAME record like i mention below. 

CNAME	www	<<yourgithubusername>>.github.io	1 hour

Now you can check yourcustomdomain.com, it will be served under github pages.