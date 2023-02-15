from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Student(models.Model):
    id = models.BigAutoField(primary_key=True)
    sName = models.CharField(max_length=20)
    age = models.FloatField()

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    birth_date = models.DateField(null=True, blank=True)
    
    
    def __str__(self):
        return self.sName