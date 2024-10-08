import fastapi

main_router = fastapi.APIRouter()

@main_router.get("/")
async def helloWorld():
    return "HelloWorld"
