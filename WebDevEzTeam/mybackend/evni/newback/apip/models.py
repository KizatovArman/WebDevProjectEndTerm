from django.db import models
from datetime import datetime, timedelta
from django.contrib.auth.models import User


class TaskListManager(models.Model):
    def for_user(self, user):
        return self.filter(created_by=user).order_by('name')


class ExerciseCategoryManager(models.Model):
    def for_user_order_by_name(self):
        return self.order_by('name')


class TaskList(models.Model):
    name = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=True)

    objects = TaskListManager()

    class Meta:
        verbose_name = 'TaskList'
        verbose_name_plural = 'TaskLists'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Task(models.Model):
    name = models.CharField(max_length=300)
    created_at = models.DateTimeField(default=datetime.now(), blank=True)
    due_on = models.DateTimeField(blank=True, default=None, null=True)
    status = models.CharField(max_length=300)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Task'
        verbose_name_plural = 'Tasks'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'due_on': self.due_on,
            'status': self.status,
        }


class ExercisesCategory(models.Model):
    name = models.CharField(max_length=255)

    # objects = ExerciseCategoryManager()

    class Meta:
        verbose_name = 'ExercisesCategory'
        verbose_name_plural = 'ExercisesCategories'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Exercise(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField()
    equipment_needed = models.CharField(max_length=300)
    how_to_do = models.CharField(max_length=1000)
    exercise_category = models.ForeignKey(ExercisesCategory, on_delete=models.CASCADE, null=True, default=None)

    class Meta:
        verbose_name = 'Exercise'
        verbose_name_plural = 'Exercises'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'photo': self.photo,
            'equipment_needed': self.equipment_needed,
            'how_to_do': self.how_to_do,
        }
