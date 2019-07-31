from django.db import models

# Create your models here.
class Customer(models.Model):
    name = models.CharField("name", max_length=255)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.first_name
