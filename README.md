# cloud-function-monorepo

All functions should have the same name from his directory + `Function` word. Ex:
`cloud-functions/sendSlackMessageFunction`

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