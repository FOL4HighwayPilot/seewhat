# Generated by Django 3.1.1 on 2020-12-02 06:47

import cvat.apps.engine.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('engine', '0036_task_is_deleted'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='deleted_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]

