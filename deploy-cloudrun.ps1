# Cloud Run Deployment Script for JAP-BONG PRO
# Usage: ./deploy-cloudrun.ps1

$PROJECT_ID = "your-gcp-project-id"  # Replace with your GCP project ID
$REGION = "asia-northeast3"  # Seoul region
$SERVICE_NAME = "run-jap"

Write-Host "🚀 Deploying JAP-BONG PRO to Cloud Run..." -ForegroundColor Cyan

# Build and push to Container Registry
Write-Host "📦 Building container image..." -ForegroundColor Yellow
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME

# Deploy to Cloud Run
Write-Host "☁️ Deploying to Cloud Run..." -ForegroundColor Yellow
gcloud run deploy $SERVICE_NAME `
    --image gcr.io/$PROJECT_ID/$SERVICE_NAME `
    --platform managed `
    --region $REGION `
    --allow-unauthenticated `
    --memory 512Mi `
    --cpu 1 `
    --min-instances 0 `
    --max-instances 10 `
    --port 8080

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your app is live at: https://$SERVICE_NAME-xxxxxxxxxx-an.a.run.app" -ForegroundColor Cyan
