# Generated by Django 2.2.1 on 2019-05-08 11:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190508_1547'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diets',
            name='description',
            field=models.CharField(max_length=1500),
        ),
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2019, 5, 8, 17, 1, 59, 438174)),
        ),
    ]