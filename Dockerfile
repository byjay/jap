# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY backend/requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy ALL files (Frontend + Backend)
COPY . .

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable for production
ENV PORT="8000"
ENV GEMINI_API_KEY="AIzaSyDut_dCmgDbGIQ64ENq8Ws7uFMC-bwteEg"

# Run app.py when the container launches
# Note: We run from root /app, so python path needs to know about backend
ENV PYTHONPATH="${PYTHONPATH}:/app/backend"
CMD ["sh", "-c", "uvicorn backend.main:app --host 0.0.0.0 --port $PORT"]
