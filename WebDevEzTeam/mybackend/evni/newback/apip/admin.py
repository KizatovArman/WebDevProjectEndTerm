from django.contrib import admin
from apip.models import TaskList,Task,ExercisesCategory,Exercise

admin.site.register(Task)


@admin.register(TaskList)
class TaskListAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'created_by')


admin.site.register(ExercisesCategory)

admin.site.register(Exercise)

