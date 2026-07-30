from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from typing import Optional, Dict, Any
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="ApexFlow API",
    description="Autonomous AI Agent for B2B Workflows",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class AgentRequest(BaseModel):
    prompt: str
    context: Optional[Dict[str, Any]] = None

class AgentResponse(BaseModel):
    status: str
    result: Optional[Dict[str, Any]] = None
    message: str

# Configuration
EVOROZEN_API_KEY = os.getenv("EVOROZEN_API_KEY", "")
EVOROZEN_API_URL = os.getenv("EVOROZEN_API_URL", "https://pulse.evorozen.com/api/v1")

# Routes
@app.get("/")
def root():
    return {"message": "ApexFlow API is running", "version": "1.0.0", "status": "active"}

@app.post("/agent/execute", response_model=AgentResponse)
def execute_agent(request: AgentRequest):
    """
    Execute agent using Evorozen Neural Pulse API.
    Falls back to MOCK mode if API fails.
    """
    
    # --- MOCK MODE ---
    def mock_response():
        steps = [
            f"Analyzing prompt: {request.prompt[:50]}...",
            "Identifying target platforms (Slack, Gmail, CRMs, Jira)",
            "Generating workflow plan",
            "Executing automation sequence",
            "Returning consolidated result"
        ]
        return AgentResponse(
            status="success",
            result={
                "mock": True,
                "prompt": request.prompt,
                "workflow_steps": steps,
                "execution_time_ms": 1500
            },
            message="Agent executed successfully (mock mode)"
        )
    
    # --- REAL API MODE ---
    try:
        if not EVOROZEN_API_KEY:
            return mock_response()
        
        evorozen_payload = {
            "prompt": request.prompt,
            "context": request.context or {},
            "agent_type": "b2b_workflow_automation"
        }
        
        headers = {
            "Authorization": f"Bearer {EVOROZEN_API_KEY}",
            "Content-Type": "application/json"
        }
        
        # CORREGIDO: /agent/execute sin duplicar /v1
        url = f"{EVOROZEN_API_URL}/agent/execute"
        
        response = requests.post(
            url,
            json=evorozen_payload,
            headers=headers,
            timeout=10
        )
        
        if response.status_code == 200:
            result = response.json()
            return AgentResponse(
                status="success",
                result=result,
                message="Agent executed successfully"
            )
        else:
            # Si falla la API, usar MOCK
            return mock_response()
            
    except Exception:
        # Si hay error, usar MOCK
        return mock_response()