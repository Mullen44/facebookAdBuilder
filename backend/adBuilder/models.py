from django.db import models

# Create your models here.

class AdBuilder(models.Model):
    headline = models.CharField(max_length=200)
    image = models.ImageField

    def _str_(self):
        return self.headline