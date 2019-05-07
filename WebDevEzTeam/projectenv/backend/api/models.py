from django.db import models
from datetime import datetime

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