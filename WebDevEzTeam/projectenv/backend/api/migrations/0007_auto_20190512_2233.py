# Generated by Django 2.2 on 2019-05-12 16:33

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20190511_0339'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2019, 5, 12, 22, 33, 20, 85966)),
        ),
    ]
