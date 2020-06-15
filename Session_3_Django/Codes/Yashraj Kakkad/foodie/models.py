from django.db import models


class Ingredient(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class FoodItem(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.IntegerField()
    ingredients = models.ManyToManyField(Ingredient)

    def __str__(self):
        return self.name
