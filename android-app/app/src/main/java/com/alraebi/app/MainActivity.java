package com.alraebi.app;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONObject;

/**
 * Opens the approved Al-Raebi link. On each launch it asks the current site which link the
 * admin approved (/api/public/app-url). The link only changes after the admin presses
 * "تحديث واعتماد الرابط المرجعي الجديد" in the admin page.
 */
public class MainActivity extends Activity {
  static final String DEFAULT_URL = "https://al-power-harbor.lovable.app";
  WebView web;
  SharedPreferences prefs;

  @Override protected void onCreate(Bundle b) {
    super.onCreate(b);
    prefs = getSharedPreferences("raebi", MODE_PRIVATE);
    web = new WebView(this);
    WebSettings s = web.getSettings();
    s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setMediaPlaybackRequiresUserGesture(false);
    web.setWebViewClient(new WebViewClient());
    web.setWebChromeClient(new android.webkit.WebChromeClient());
    setContentView(web);
    String url = prefs.getString("url", DEFAULT_URL);
    web.loadUrl(url);
    checkApproved(url);
  }

  void checkApproved(final String current) {
    new Thread(() -> {
      try {
        HttpURLConnection c = (HttpURLConnection) new URL(current + "/api/public/app-url").openConnection();
        c.setConnectTimeout(8000); c.setReadTimeout(8000);
        BufferedReader r = new BufferedReader(new InputStreamReader(c.getInputStream()));
        StringBuilder sb = new StringBuilder(); String line;
        while ((line = r.readLine()) != null) sb.append(line);
        String approved = new JSONObject(sb.toString()).optString("url", "");
        if (approved.startsWith("https://") && !approved.equals(current)) {
          prefs.edit().putString("url", approved).apply();
          runOnUiThread(() -> web.loadUrl(approved));
        }
      } catch (Exception ignored) { }
    }).start();
  }

  @Override public void onBackPressed() { if (web.canGoBack()) web.goBack(); else super.onBackPressed(); }
}
