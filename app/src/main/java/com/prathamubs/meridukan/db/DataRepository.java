package com.prathamubs.meridukan.db;

import android.content.Context;
import android.os.AsyncTask;

public class DataRepository {
    private ScoreDao mScoreDao;
    private StudentDao mStudentDao;

    public DataRepository(Context context, AppDatabase db) {
        mScoreDao = db.scoreDao();
        mStudentDao = db.studentDao();
    }

    public DataRepository(Context context) {
        this(context, AppDatabase.getDatabase(context));
    }

    public AsyncTask insertScore(Score score) {
        return new insertTask(mScoreDao).execute(score);
    }

    public AsyncTask insertStudent(Student student) {
        return new insertTask(mStudentDao).execute(student);
    }

    private static class insertTask<T> extends AsyncTask<T, Void, Void> {

        private final Insertable<T> mAsyncTaskDao;

        private insertTask(Insertable<T> dao) {
            mAsyncTaskDao = dao;
        }

        @Override
        protected Void doInBackground(final T... params) {
            mAsyncTaskDao.insert(params[0]);
            return null;
        }
    }
}