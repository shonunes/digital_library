from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=256)
    release_date = models.DateField()
    num_pages = models.IntegerField()

    def __str__(self):
        return self.title
 