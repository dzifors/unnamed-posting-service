import fastapi
import contextlib


@contextlib.asynccontextmanager
async def lifespan(_):
    # TODO: Initialize database
    print("Backend listening on ")

    yield

    print("Backend shut down. Have a nice day!")

    # TODO: Disconnect from database


def init_backend() -> fastapi.FastAPI:
    asgi_app = fastapi.FastAPI(lifespan=lifespan)

    return asgi_app


asgi_app = init_backend()
