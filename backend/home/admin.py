from django.contrib import admin
from .models import Image, Post, PostMedia

admin.site.register(Post)
admin.site.register(PostMedia)
admin.site.register(Image)

# Register your models here.
