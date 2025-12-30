# JAP-BONG PRO - Cloud Run Deployment
# Full-stack: FastAPI backend + Static frontend

FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy backend requirements first (for caching)
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY backend/ ./

# Copy frontend static files
COPY index.html ./
COPY js/ ./js/
COPY css/ ./css/
COPY data/ ./data/
COPY images/ ./images/
COPY characters/ ./characters/
COPY audio/ ./audio/
COPY manifest.json ./
COPY sw.js ./

# Set environment variables
ENV PORT=8080
ENV HOST=0.0.0.0

# Expose port
EXPOSE 8080

# Run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
