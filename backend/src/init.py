import fastapi
import contextlib
from src.routes import main_router


@contextlib.asynccontextmanager
async def lifespan(_):
    # TODO: Initialize database
    print("Backend listening on ")

    yield

    print("Backend shut down. Have a nice day!")

    # TODO: Disconnect from database

def init_backend() -> fastapi.FastAPI:
    asgi_app = fastapi.FastAPI(lifespan=lifespan)
    asgi_app.include_router(main_router)

    return asgi_app


asgi_app = init_backend()
