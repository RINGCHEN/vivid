from django.db import models

# Create your models here.
class classes_offered(models.Model):
        class Meta:
                db_table = 'classes_offered_db'
        
        class_title = models.CharField(max_length=200)
        instructor_name = models.CharField(max_length=100)
        class_datetime = models.DateTimeField() #"YYYY-MM-DDTHH:MM:SS"
        participants = models.JSONField()