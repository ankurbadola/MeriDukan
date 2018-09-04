package com.prathamubs.meridukan.db;

import android.arch.persistence.room.Room;
import android.content.Context;
import android.support.test.InstrumentationRegistry;
import android.support.test.runner.AndroidJUnit4;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.List;
import java.util.concurrent.ExecutionException;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

@RunWith(AndroidJUnit4.class)
public class DataRepositoryTest {
    DataRepository repository;
    AppDatabase database;

    @Before
    public void createDb() {
        Context context = InstrumentationRegistry.getContext();
        database = Room.inMemoryDatabaseBuilder(context, AppDatabase.class)
                .allowMainThreadQueries()
                .build();
        repository = new DataRepository(database);
    }

    @After
    public void closeDb() {
        database.close();
    }

    @Test
    public void writeScoreAndReadInList() throws InterruptedException, ExecutionException {
        Score score = new Score(
                "xxx", "xxx", "xxx", "xxx", 1,
                1, 1, "xxx", "xxx", "xxx");
        repository.insertScore(score).get();
        List<Score> scores = database.scoreDao().getAll();
        assertThat(scores.size(), is(equalTo(1)));
        assertThat(scores.get(0).sessionId, is(equalTo(score.sessionId)));
        assertThat(scores.get(0).totalMarks, is(equalTo(score.totalMarks)));
        assertThat(scores.get(0).label, is(equalTo(score.label)));
    }

    @Test
    public void writeStudentAndReadInList() throws InterruptedException, ExecutionException {
        Student student = new Student();
        student.StudentID = "xxx";
        repository.insertStudent(student).get();
        List<Student> students = database.studentDao().getAll();
        assertThat(students.size(), is(equalTo(1)));
        assertThat(students.get(0).StudentID, is(equalTo("xxx")));
        assertThat(students.get(0).StudentUID, is(equalTo(null)));
    }
}