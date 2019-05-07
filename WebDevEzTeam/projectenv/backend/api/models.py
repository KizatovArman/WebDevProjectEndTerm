from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver


# Manager for Task Model
class TaskManager(models.Manager):
    def for_user(self, user):
        return self.filter(created_by=user)


class Task(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now())
    due_on = models.DateTimeField(default=None, null=True)
    status = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    objects = TaskManager()

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'


# User Profile Model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    second_name = models.CharField(max_length=255)
    task_count = models.IntegerField(default=None, null=True)
    overall_body_test = models.IntegerField(default=None, null=True)
    allergies = models.CharField(default=None, null=True, max_length=100)
    blood_pressure = models.CharField(default=None, null=True, max_length=100)

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'Profiles'


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()


# Diets Model
class Diets(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Diet'
        verbose_name_plural = 'Diets'


# Supplement
class Supplement(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=1500)

    class Meta:
        verbose_name = 'Supplement'
        verbose_name_plural = 'Supplements'
