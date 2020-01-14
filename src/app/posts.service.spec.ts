
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';

import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


const mockTodoData = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }, {
    userId : 2,
    "id" : 2,
    "title" : "read ngbook",
    completed : true
  }
];

describe('PostsService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });


  it("should get data", inject([HttpTestingController, PostsService],
    (httpMock: HttpTestingController) => {
      const postService: PostsService = TestBed.get(PostsService);
      postService.getPosts().subscribe((data: any) => {
        expect(data.length).toBe(2);
      });
      const mockReq = httpMock.expectOne("https://jsonplaceholder.typicode.com/todos");
      expect(mockReq.request.method).toEqual("GET");
      mockReq.flush(mockTodoData);
      httpMock.verify();
    }
  ));

});
