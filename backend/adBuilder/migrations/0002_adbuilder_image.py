# Generated by Django 4.0.4 on 2022-05-10 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adBuilder', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='adbuilder',
            name='image',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]