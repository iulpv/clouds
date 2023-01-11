# clouds


https://joke-random.website.yandexcloud.net/
https://d5dekkh1ufvfo08t7a9m.apigw.yandexcloud.net/

### Приложение - база шуток. 
Для того, чтобы шутка появилась на экране нужно нажать кнопку: показать шутку. В нижней части экрана есть кнопка - стрелочка, по которой можно получить следующую шутку, они приходят рандомно. Так же шутки можно оценивать или добавлть свои

## Настройка: 

1. `export FOLDER_ID="<folder_id из облака>"`
2. ` cd deploy`
3. в provider.tf ввести: token, cloud_id, folder_id
4. `terraform init`
5. ```
   chmod +x first_step.sh
   chmod +x service_account_permission.sh
   chmod +x ../backend/deploy.sh
   chmod +x ../frontend/project/deploy.sh
   chmod +x create_bucket.sh
   chmod +x create_gateways.sh
   ```
6. ./first_step.sh

**экспортировать данные из вывода**

```export JOKE_API_REPOSITORY_NAME=""

export JOKE_DATABASE_DOCUMENT_API_ENDPOINT=""

export JOKE_DATABASE_PATH=""

export JOKE_SERVICE_ACCOUNT_ID=""

export JOKE_API_CONTAINER_ID=""

export AWS_ACCESS_KEY_ID=""

export AWS_SECRET_ACCESS_KEY=""
```



7. ` ./service_account_permission.sh`
8. сделать миграцию таблиц в /backend "python3 /app/table_migration.py"
9. `./create_bucket.sh`
10. `export JOKE_BUCKET="joke-random"`
11. подставить данные в опен апи файлах: openapi_web.yaml (JOKE_SERVICE_ACCOUNT_ID, JOKE_WEBSITE_BUCKET) и openapi_backend.yaml (JOKE_SERVICE_ACCOUNT_ID, JOKE_API_CONTAINER_ID)
12. `./create_gateway.sh`
13.
```
export JOKE_API_GATEWAY_DOMAIN=""

export JOKE_WEBSITE_GATEWAY_DOMAIN=""
```
14. Поменять path во фронте (переменная path в main-page.tsx) на JOKE_API_GATEWAY_DOMAIN 
15. Для деплоя фронта или бэка в их папке воспользоваться `./deploy.sh`


**Проверка, что апи запустилось: `curl ${JOKE_API_GATEWAY_DOMAIN}/info`. Предварительно не забудьте задеплоить**