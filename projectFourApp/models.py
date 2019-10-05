from django.db import models

# Create your models here.
class User(models.Model):
    userName = models.CharField(max_length=19)
    email    = models.EmailField()

class Entry(models.Model):
    medium = models.CharField(max_length=51)
    title  = models.CharField(max_length=51)
    art    = models.CharField(max_length=351)
    user   = models.ForeignKey(User, on_delete=models.CASCADE, related_name='entry')

class Notes(models.Model):
    name    = models.CharField(max_length=19)
    comment = models.CharField(max_length=51)
    entry   = models.ForeignKey(Entry, on_delete=models.CASCADE, related_name='notes')
