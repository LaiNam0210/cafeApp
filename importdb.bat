mongo cafe --eval "db.dropDatabase()"
for /f %%a IN ('dir /b /s "res\dbsample\*.js"') do mongo cafe %%a
