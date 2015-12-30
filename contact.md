---
layout: page
title: Contact Us
permalink: /contact/
weight: 5
image: contact
subcontent: [contact, become-a-tutor]
---

If you're interested in receiving some tuition for yourself or your child or if you simply want more information, fill in your details here and somebody from our team will contact you shortly.

<form action="//formspree.io/{{ site.email }}" method="POST">
  <br />
  <div class="form-group">
    <input type="text" class="form-control" id="name" placeholder="Name" name="name" required>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="email" placeholder="Email" name="_replyto" required>
  </div>
  <div class="form-group">
    <textarea class="form-control" rows="3" placeholder="Comment" name="body" required></textarea>
  </div>
  <input type="hidden" name="_subject" value="General Enquiry" />
  <input type="text" name="_gotcha" style="display:none" />
  <button type="submit" class="btn btn-primary">Send</button>
</form>
