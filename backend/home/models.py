from django.conf import settings
from django.db import models


class Post(models.Model):
    "Generated Model"
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="post_user",
    )
    caption = models.CharField(
        max_length=256,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
    )
    image = models.URLField(
        null=True,
        blank=True,
    )


class PostMedia(models.Model):
    "Generated Model"
    post = models.ForeignKey(
        "home.Post",
        on_delete=models.CASCADE,
        related_name="postmedia_post",
    )
    video = models.URLField()
