# Generated by Django 4.0.6 on 2023-02-07 16:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('sName', models.CharField(max_length=20)),
                ('age', models.FloatField()),
            ],
        ),
    ]
