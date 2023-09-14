# cloud-function-monorepo


### How to deploy

```
gcloud functions deploy helloFunction \
    --gen2 \
    --runtime=nodejs18 \
    --region=us-central1 \
    --source=. \
    --entry-point=helloFunction \
    --trigger-http \
    --allow-unauthenticated
```