---
layout: page
title: Posts
permalink: /posts/
weight: 4
image: pens
subcontent: [recent-posts, contact]
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <p><span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span></p>
    </li>
  {% endfor %}
</ul>
